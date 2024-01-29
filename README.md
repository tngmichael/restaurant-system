# Restaurant System

## Setup

- Install Node.js v18
- Install Docker Desktop
- Clone this repository, run: git clone https://github.com/tngmichael/restaurant-system.git
- Run: cd restaurant-system
- Run: docker build -t restaurant-system .
- Copy .env.example to .env
- Run: docker-compose up -d
- Wait 1 or 2 minutes until mysql init finished
- And also check migration in order service, run: docker logs restaurant-system-order-1

## Testing

- Open API docs using swagger on http://localhost:8800/api
- Fetch food menu, GET http://localhost:8800/api/menus
- Place an order, POST http://localhost:8800/api/orders
```
POST /api/orders HTTP/1.1
Host: localhost:8000
Content-Type: application/json

{
	"customerEmail": "your_email@gmail.com",
	"items": [
		{
			"menuId": "id_from_menus_api_response",
			"quantity": 1
		},
		{
			"menuId": "id_from_menus_api_response",
			"quantity": 2
		}
	],
	"tableNumber": "002"
}
```
- Track the status of the order, GET http://localhost:8800/api/orders/status?orderId=your_order_id&customerEmail=your_email@gmail.com
- NOTE: to see logs, run: docker logs restaurant-system-order-1
- NOTE: to see database records, uncomment db ports in docker-compose.yml
- NOTE: to see rabbitmq dashboard, use image rabbitmq:3-management-alpine and uncomment rmq ports in docker-compose.yml
- NOTE: docker-compose using attached volume in folder `infra`, if something went wrong, delete all folders inside 
- NOTE: public docker restaurant-system is also available, set image tngmichael89/restaurant-system:1.0.0 in docker-compose.yml

## Clean up

- Run: docker-compose down
- Run: docker rmi restaurant-system

## Development

- Run: npm install
- Copy .env.example to .env
- Change env value
- Run each service: npm run start:dev -w @restaurant-system/service_name
- Default port is 8000, example: http://localhost:8000/api
