import mysql.connector

# Replace with your own database connection details
config = {
    "host": "localhost",
    "user": "root",
    "password": "ahmadraza1.",
    "database": "mysql"
}

# Create a connection
try:
    connection = mysql.connector.connect(**config)
    print("Connected to MySQL database!")
except mysql.connector.Error as err:
    print(f"Error: {err}")
finally:
    if 'connection' in locals() and connection.is_connected():
        connection.close()
        print("Connection closed.")
