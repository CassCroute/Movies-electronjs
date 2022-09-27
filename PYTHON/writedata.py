import mysql.connector
import json

def verification_url(value):
    if "https://uqload.com/" in value:
        return value.replace("https://uqload.com/", "https://uqload.com/embed-")
    elif "https://vudeo.net/" in value: 
        if "https://vudeo.net/embed-" in value:
            return value
        else:
            return value.replace("https://vudeo.net/", "https://vudeo.net/embed-")
    else:
        return value.replace("https://uqload.org/", "https://uqload.org/embed-")

list_films_episodique = ["Harry Potter", "conjuring", "Monstre & cie", "Jean-Gabin", "Wonder Woman",
"Sans un bruit", "Les Croods", "Tous en scène", "Destination Finale", "Le Bossu de Notre-Dame",
"Dragons", "Annabelle", "Men in Black", "Saw", "Les mondes de Ralph", "Les Indestructibles",
"Jumanji", "Rio", "Creed", "The Suicide Squad", "365 Jours", "Escape Game", "Hunger Games", "Justice League", 
"Aladdin", "Hulk", "Camping", "Twilight", "Sauvez Willy", "Ant-Man", "Les minions", "Labyrinthe","Transformers", 
"Sherlock Holmes","Les Trolls", "Zombieland", "Terminator", "Star Wars", "Toy Story"]

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="admin",
  database="casscroute"
)

sql = "INSERT INTO films (ID, TITLE, ORIGINALTITLE, LINK) VALUES (%s, %s, %s, %s)"

with open("GoodMovie.json", 'r+', encoding="UTF-8") as f:
    data = json.load(f)

mycursor = mydb.cursor()


count = 1

for key, value in data["Film"].items():
    try:
        if key in list_films_episodique:
            for key, value in data["Film"][key].items():
                val = (count, key, key, verification_url(value))
                mycursor.execute(sql, val)
                count += 1
        else:
            val = (count, key, key, verification_url(value))
            mycursor.execute(sql, val)
            count += 1
    except AttributeError:
        print("Erreur survenue !", value)

mydb.commit()

print(count-1, "éléments ajoutés dans la base de données")






























































"""import json

list_films_episodique = ["Harry Potter", "conjuring", "Monstre & cie", "Jean-Gabin", "Wonder Woman",
"Sans un bruit", "Les Croods", "Tous en scène", "Destination Finale", "Le Bossu de Notre-Dame",
"Dragons", "Annabelle", "Men in Black", "Saw", "Les mondes de Ralph", "Les Indestructibles",
"Jumanji", "Rio", "Creed", "The Suicide Squad", "365 Jours", "Escape Game", "Hunger Games", "Justice League", 
"Aladdin", "Hulk", "Camping", "Twilight", "Sauvez Willy", "Ant-Man", "Les minions", "Labyrinthe","Transformers", "Sherlock Holmes","Les Trolls", "Zombieland"]


def verification_url(value):
    if "https://uqload.com/" in value:
        print(value.replace("https://uqload.com/", "https://uqload.com/embed-"))
    elif "https://vudeo.net/" in value: 
        if "https://vudeo.net/embed-" in value:
            print(value)
        else:
            print(value.replace("https://vudeo.net/", "https://vudeo.net/embed-"))
    else:
        print(value.replace("https://uqload.org/", "https://uqload.org/embed-"))

with open("a.json", 'r+', encoding="UTF-8") as f:
    data = json.load(f)

for key, value in data["Film"].items():
    try:
        if key in list_films_episodique:
            
            for key, value in data["Film"][key].items():
                test(value)
        else:
            test(value)
    except AttributeError:
        print("Erreur survenue")"""