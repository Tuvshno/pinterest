from cgitb import html
from bs4 import BeautifulSoup
import requests
from pymongo import MongoClient

# Providing DB the Connection String
CONNECTION_STRING = 'mongodb+srv://tuvshno:Icanownu123@nodeexpressprojects.adw5qbo.mongodb.net/?retryWrites=true&w=majority'

# Creating connection

# try:
#     # Get Collection from Database
#     client = MongoClient(CONNECTION_STRING)
#     db = client['Pinterest']
#     collection = db['posts']

#     # Print All Items in Collection
#     item_details = collection.find()
#     for item in item_details:
#         print(item)

# except:
#     print('CONNECTION FAILED')


from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager

options = Options()
options.add_argument('--headless')

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

driver.get("https://twitter.com/search?q=%23art&src=typed_query")

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



# def getData(url):
#   res = requests.get(url)
#   return res.text

# htmlData = getData("https://www.imdb.com/chart/top/")
# soup = BeautifulSoup(htmlData, 'html.parser')

# links = soup.select("table tbody tr td.titleColumn a")
# first10 = links[:10]
# for anchor in first10:
#   print(anchor.text)