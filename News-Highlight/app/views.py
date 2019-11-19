from flask import render_template,request,redirect,url_for
from app import app
from .request import get_news
from .request import get_news,get_news
# from .news import Review
from .forms import ReviewForm
# Review = review.Review

# Views

@app.route('/')
def index():

    '''
    View root page function that returns the index page and its data
    '''

    # Getting popular movie
    National_news = get_news('National')
    Bussiness_news = get_news('Bussiness')
    Sports_news = get_news('Sports')

    title = 'Home - Welcome to The best news Review Website Online'

    search_news = request.args.get('news_query')

    if search_news:

        return redirect(url_for('search',news_name=srearch_news))
    else:

        return render_template('index.html', title = title, national = National_news, bussiness = Bussiness_news, sports = sports_news) 

@app.route('/news/<int:id>')
def news(id):

    '''
    View news page function that returns the news details page and its data
    '''
    news = get_news(id)
    title = {'news.title'}

    return render_template('movie.html',title = title,news = news)

@app.route('/search/<news_name>')
def search(news_name):
    '''
    View function to display the search results
    '''
    news_name_list = movie_name.split(" ")
    news_name_format = "+".join(news_name_list)
    searched_news = search_news(news_name_format)
    # title = f'search results for {news.title
    return render_template('search.html',news = searched_new)
 
