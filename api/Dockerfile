FROM golang:1.19 as lunch-buddies-api

WORKDIR /app/src

COPY ./ ./

RUN go build -o /app/src/build/

EXPOSE 2500

CMD ["build/api"]
