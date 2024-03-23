import requests

url = "https://v3.football.api-sports.io/teams?id=33"

headers = {
    'x-rapidapi-host': "v3.football.api-sports.io",
    'x-rapidapi-key': "e97ca1780bd4e9c6fb7a7cb50d086b3a"
}

response = requests.get(url, headers=headers)

data = response.json()

print(data)



