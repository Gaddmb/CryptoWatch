# Crypto Watch Tower

Market data : `https://api.coingecko.com/api/v3/global` renvoie les stats sur les stats generales du marché crypto

All coins data : `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y` Elle renvoie la liste des crypto-monnaies individuelles (coins) avec toutes leurs données de marché actuelles.

Coin price chart : `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${duration}${duration > 32 ? "&interval=daily" : ""}`
