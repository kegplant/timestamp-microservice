# Timestamp Microservice

Timestamp microservice project. Accepts a Unix time or natural date parameter and returns both, or null if the parameter is invalid.

## User stories:
- I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).
- If it does, it returns both the Unix timestamp and the natural language form of that date.
- If it does not contain a date or Unix timestamp, it returns null for those properties.

## Usage

- Natural Date
  - `/November 4, 2016`
- UNIX Time
  - `/1478217600`

### Output

```json
{
  "unix": 1478217600,
  "natural": "November 4, 2016"
}
```
