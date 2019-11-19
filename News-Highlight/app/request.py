from app import app
import urllib.request,json
from .models import news

News = news.News

#Getting api key
api_key = app.config["NEWS_API_KEY"]

# Getting the news base url
base_url = app.config["NEWS_API_BASE_URL"]

def get_news(category):
    '''
    Function that gets the json response to our url request
    '''
    
    get_news_url = base_url.format(category,api_key)

    with urllib.request.urlopen(get_news_url) as url:
        get_news_data = url.read()
        get_news_response = json.loads(get_news_data)

        news_results = None

        if get_news_response['results']:
            news_results_list = get_news_response['results']
            news_results = process_results(news_results_list)
            print(news_results)

    return news_results

def process_results(NEWS_list):
    '''
    Function  that processes the news result and transform them to a list of Objects

    Args:
        movie_list: A list of dictionaries that contain news details

    Returns :
        movie_results: A list of news 
    '''
    mews_results = []
    for news_item in news_list:
        id = news_item.get('id')
        title = news_item.get('original_title')
        overview = news_item.get('overview')
        poster = news_item.get('poster_path')
        vote_average = news_item.get('vote_average')
        vote_count = news_item.get('vote_count')

        if poster:
            news_object = news(id,title,overview,poster,vote_average,vote_count)
            news_results.append(news_object)

    return news_results



def get_news(id):
    get_news_details_url = base_url.format(id,api_key)


    with urllib.request.urlopen(get_news_details_url) as url:
        news_details_data = url.read()
        news_details_response = json.loads(news_details_data)

        news_object = None
        if news_details_response:
            id: "abc-news"
            name: "ABC News"
            description: "Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com."
            url: "https://abcnews.go.com"
            category: "general"
            # language: "en",
            # country: "us"

        news_object = news(id,name,description,url,category)

    return news_object
    def search_news(news_name):
        search_news_url = 'http://newsapi.org/v2/sources?&apiKey=dc66f48ff1024c8081c1bfd5fc03827f'.format(api_key,movie_name)
    with urllib.request.urlopen(search_news_url) as url:
        search_news_data = url.read()
        search_news_response = json.loads(search_news_data)

        search_news_results = None

        if search_news_response['results']:
            search_news_list = search_news_response['results']
            search_news_results = process_results(search_news_list)





    
    