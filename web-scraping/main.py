from gc import collect
from pymongo import MongoClient

# Providing DB the Connection String
CONNECTION_STRING = 'mongodb+srv://tuvshno:Icanownu123@nodeexpressprojects.adw5qbo.mongodb.net/?retryWrites=true&w=majority'

# Creating connection
try:
    # Get Collection from Database
    client = MongoClient(CONNECTION_STRING)
    db = client['Pinterest']
    collection = db['posts']

    print('connected')

    # Print All Items in Collection
    item_details = collection.find()
    for item in item_details:
      if (item['imageURL'] == 'https://i.pinimg.com/originals/b6/10/f0/b610f00829c41f584cda2005f4790fac.jpg'):
        print(item['_id'])
        query = {'_id' : "ObjectId('{}')".format(item['_id'])}
        collection.delete_one(query)
except:
    print('CONNECTION FAILED')