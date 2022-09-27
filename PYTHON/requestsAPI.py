import requests

API_KEY = '5be7b12ec6a123845929bd6ca0dc04c3'
film = input(">> ")

r = requests.get(f"https://api.themoviedb.org/3/search/multi?api_key={API_KEY}&query={film}")
data = r.json()

print(f"Background :> https://image.tmdb.org/t/p/original{data['results'][0]['backdrop_path']}")
print(f"Poster :> https://image.tmdb.org/t/p/original{data['results'][0]['poster_path']}")