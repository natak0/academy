SELECT COUNT(*) as FlightQuantity FROM USAirlineFlights2.flights;

SELECT Origin, AVG(DepDelay) as dep_delay, AVG(ArrDelay) as avg_delay FROM USAirlineFlights2.flights
GROUP BY Origin;

SELECT Origin, Year, Month, AVG(DepDelay) as Avg_delay FROM USAirlineFlights2.flights 
Group by Month, Year, Origin Order by Origin, Year, Month;

SELECT b.City, a.Year, a.Month, AVG(a.DepDelay) as Avg_delay FROM USAirlineFlights2.flights a, USAirlineFlights2.USAirports b 
WHERE a.ORIGIN=b.IATA
Group by a.Month, a.Year, b.City Order by b.City, a.Year, a.Month;

SELECT b.Description as CompaniesCancelledFlights, Count(a.Cancelled) FROM USAirlineFlights2.flights a, USAirlineFlights2.Carriers b 
WHERE a.Cancelled=1 AND a.UniqueCarrier=b.CarrierCode
Group by b.Description Order by  Count(a.Cancelled) DESC;

SELECT TailNum, SUM(Distance) FROM USAirlineFlights2.flights 
WHERE TailNum!='NA'
Group by TailNum Order by SUM(Distance) DESC LIMIT 10;

SELECT b.Description, AVG(a.ArrDelay) as AvgArrivalDelay FROM USAirlineFlights2.flights a, USAirlineFlights2.Carriers b 
WHERE a.UniqueCarrier=b.CarrierCode 
Group by b.Description
HAVING AvgArrivalDelay>'10';





