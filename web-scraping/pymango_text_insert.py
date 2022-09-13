from ast import Try
from cgitb import html
from traceback import print_stack
from bs4 import BeautifulSoup
import requests
from pymongo import MongoClient
import time
from seleniumwire import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.keys import Keys

# Get URLS
def getURLS(pagesDown):
  options = Options()
  options.add_argument('--headless') #no open browser

  driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

  driver.get('https://www.pinterest.com/search/pins/?q=art')

  elem = driver.find_element(By.TAG_NAME, "body")
  no_of_pagedowns = pagesDown

  while no_of_pagedowns:
    elem.send_keys(Keys.PAGE_DOWN)
    time.sleep(0.2)
    no_of_pagedowns-=1

  driver.implicitly_wait(5)

  urls = []
  print('GETTING URLS....')
  for request in driver.requests:
      if request.response:
        if request.response.headers['Content-Type'] == 'image/jpeg':
              newURL = request.url.replace('236x', 'originals')
              urls.append(newURL)

  print("length of urls: " + str(len(urls)))
  return urls

# Providing DB the Connection String
CONNECTION_STRING = 'mongodb+srv://tuvshno:Icanownu123@nodeexpressprojects.adw5qbo.mongodb.net/?retryWrites=true&w=majority'

# Creating connection
try:
    # Get Collection from Database
    client = MongoClient(CONNECTION_STRING)
    db = client['Pinterest']
    collection = db['posts']

    urls = getURLS(1)

    for url in urls:
      object = {"imageURL": url}
      collection.insert_one(object)

    # Print All Items in Collection
    item_details = collection.find()
    for item in item_details:
        print(item)

except:
    print('CONNECTION FAILED')








#---------------Other scraping methods-----------------------------
# from selenium import webdriver
# from selenium.webdriver.support.ui import WebDriverWait
# from selenium.webdriver.support import expected_conditions as EC

# options = Options()
# options.add_argument('--headless') #no open browser

# driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options) #initializing driver

#driver.get("https://www.pinterest.com/search/pins/?q=art&rs=typed&term_meta[]=art%7Ctyped") #getting webpage to scrape
#time.sleep(2)  # Allow 2 seconds for the web page to open
#scroll_pause_time = 1 # You can set your own pause time. My laptop is a bit slow so I use 1 sec
#screen_height = driver.execute_script("return window.screen.height;")   # get the screen height of the web
#i = 1

# driver.get("https://www.pinterest.com/search/pins/?q=art&rs=typed&term_meta[]=art%7Ctyped")
# time.sleep(1)

# elem = driver.find_element(By.TAG_NAME, "body")

# no_of_pagedowns = 10

# while no_of_pagedowns:
#     elem.send_keys(Keys.PAGE_DOWN)
#     time.sleep(0.2)
#     no_of_pagedowns-=1
# try:
#   imageElements = WebDriverWait(driver, 30).until(EC.visibility_of_all_elements_located((By.CLASS_NAME, "PinCard__imageWrapper")))
# except:
#   imageElements = WebDriverWait(driver, 30).until(EC.visibility_of_all_elements_located((By.CLASS_NAME, "PinCard__imageWrapper")))
# #post_elems = driver.find_elements(By.CLASS_NAME, "PinCard__imageWrapper")
# urls = []
# for image in imageElements:
#   url = image.find_element(By.TAG_NAME, 'img').get_attribute('src')
#   urls.append(url)

# print(len(urls))


# while True:
#     # scroll one screen height each time
#     driver.execute_script("window.scrollTo(0, {screen_height}*{i});".format(screen_height=screen_height, i=i))  
#     i += 1
#     time.sleep(scroll_pause_time)
#     # update scroll height each time after scrolled, as the scroll height can change after we scrolled the page
#     scroll_height = driver.execute_script("return document.body.scrollHeight;")  
#     # Break the loop when the height we need to scroll to is larger than the total scroll height
#     if (screen_height) * i > scroll_height:
#         break

# urls=[]
# soup = BeautifulSoup(driver.page_source, "lxml")
# for parent in soup.find_all(class_="PinCard__imageWrapper"):
#     image = parent.find("img")
#     url = image.attrs['src']
#     newURL = url.replace('236x', 'originals')
#     urls.append(newURL)

# print(urls)
# driver.implicitly_wait(45)
# try:
#   imageElements = driver.find_elements(By.CLASS_NAME, "PinCard__imageWrapper")
# except:
#   imageElements = driver.find_elements(By.CLASS_NAME, "PinCard__imageWrapper")

# imageElements = driver.find_elements(By.CLASS_NAME, "PinCard__imageWrapper")
# for image in imageElements:
#   url = image.find_element(By.TAG_NAME, 'img').get_attribute('src')
#   newURL = url.replace('236x', 'originals')
#   urls.append(newURL)

# print(urls)

# for image in imageElements:
#   urls.append(image.find_element(By.TAG_NAME, 'img').get_attribute('src'))

#-----------------Getting Images and Title From Tweet-------------------

# driver.get("https://twitter.com/39daph/status/1567945959426129920")

# try:
#     imageElement = WebDriverWait(driver, 5).until(
#         EC.presence_of_element_located((By.CSS_SELECTOR, "[aria-label=Image]"))
#     )

#     titleElement = WebDriverWait(driver, 5).until(
#         EC.presence_of_element_located((By.CSS_SELECTOR, "[data-testid=tweetText]"))
#     )

#     #Get Image
#     print(imageElement.find_element(By.TAG_NAME, 'img').get_attribute('src'))
    
#     #Get Title
#     print(titleElement.find_element(By.TAG_NAME, 'span').text)
# finally:
#     driver.quit()

#--------GETTING STATIC DATA AND PUTTING IT IN A LIST-----------------

# def getData(url):
#   res = requests.get(url)
#   return res.text

# htmlData = getData("https://www.imdb.com/chart/top/")
# soup = BeautifulSoup(htmlData, 'html.parser')

# links = soup.select("table tbody tr td.titleColumn a")
# first10 = links[:10]
# for anchor in first10:
#   print(anchor.text)