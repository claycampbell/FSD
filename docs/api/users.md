# User Management API Documentation

This document describes the REST API endpoints available for user management.

## Base URL

```
/api/users
```

## Authentication

*Note: Authentication details to be implemented*

## Endpoints

### List Users

Retrieves a list of all users.

```http
GET /api/users
```

#### Response

```json
{
    "success": true,
    "data": [
        {
            "id": "user-id",
            "firstName": "John",
            "lastName": "Doe",
            "email": "john@example.com",
            "role": "user"
        }
    ]
}
```

### Get User

Retrieves a specific user by ID.

```http
GET /api/users/:id
```

#### Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| id   | string | Yes | The unique identifier of the user |

#### Response

```json
{
    "success": true,
    "data": {
        "id": "user-id",
        "firstName": "John",
        "lastName": "Doe",
        "email": "john@example.com",
        "role": "user"
    }
}
```

### Create User

Creates a new user.

```http
POST /api/users
```

#### Request Body

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| firstName | string | Yes | User's first name (2-50 chars) |
| lastName | string | Yes | User's last name (2-50 chars) |
| email | string | Yes | Valid email address |
| role | string | Yes | User role (one of: 'admin', 'user') |

```json
{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "role": "user"
}
```

#### Response

```json
{
    "success": true,
    "data": {
        "id": "user-id",
        "firstName": "John",
        "lastName": "Doe",
        "email": "john@example.com",
        "role": "user"
    }
}
```

### Update User

Updates an existing user.

```http
PUT /api/users/:id
```

#### Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| id   | string | Yes | The unique identifier of the user |

#### Request Body

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| firstName | string | No | User's first name (2-50 chars) |
| lastName | string | No | User's last name (2-50 chars) |
| email | string | No | Valid email address |
| role | string | No | User role (one of: 'admin', 'user') |

```json
{
    "firstName": "Jane"
}
```

#### Response

```json
{
    "success": true,
    "data": {
        "id": "user-id",
        "firstName": "Jane",
        "lastName": "Doe",
        "email": "john@example.com",
        "role": "user"
    }
}
```

### Delete User

Deletes a specific user.

```http
DELETE /api/users/:id
```

#### Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| id   | string | Yes | The unique identifier of the user |

#### Response

```json
{
    "success": true,
    "message": "User deleted successfully"
}
```

## Error Responses

The API returns appropriate HTTP status codes and error messages:

### 400 Bad Request

Returned when the request is invalid.

```json
{
    "success": false,
    "message": "Invalid email format"
}
```

### 404 Not Found

Returned when the requested resource doesn't exist.

```json
{
    "success": false,
    "message": "User not found"
}
```

### 500 Internal Server Error

Returned when an unexpected error occurs.

```json
{
    "success": false,
    "message": "Internal server error"
}
```

## Rate Limiting

*Note: Rate limiting details to be implemented*

## Data Models

### User Object

| Field | Type | Description |
|-------|------|-------------|
| id | string | Unique identifier |
| firstName | string | User's first name |
| lastName | string | User's last name |
| email | string | User's email address |
| role | string | User's role (admin/user) |

## Changelog

*Note: Changelog to be maintained as API evolves*