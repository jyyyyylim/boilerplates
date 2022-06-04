package main

import (
	"fmt"
	"net/http"
)

func ping(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "pong")
}

//rcving httprequest to localhost port 192 on route /test
func main() {
	http.HandleFunc("/test", ping)
	http.ListenAndServe(":192", nil)
}
