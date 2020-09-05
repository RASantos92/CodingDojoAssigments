-- write query run to get all countries that speak Slovene?  Shoud return the name of country, language, and lang % in DESC order

-- SELECT world.countries.name, world.languages.language, world.languages.percentage FROM world.languages
-- JOIN world.languages.language ON world.countries.code = countries.languages.code
-- WHERE languages.language = 'Slovene'
-- ORDER BY world.languages.percentage DESC; 

-- What query to run displaying total # of cities for each country?  Query returns the name of country and total # of cities. Arrange
-- number of cities in DESC order--  

SELECT cities.name, countries.name FROM world.countries


