import requests
import json

def searchProducts(productQuery):
    unbxdApi = f"https://search.unbxd.io/fb853e3332f2645fac9d71dc63e09ec1/demo-unbxd700181503576558/search?q={productQuery}"
    response=requests.get(unbxdApi)
    return response