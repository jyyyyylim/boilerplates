package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"time"
)

func ping(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "pong")
}

func imgping(w http.ResponseWriter, r *http.Request) {

	fmt.Println("client " + r.RemoteAddr + " has attemped a connection at: ")
	fmt.Println(time.Now())

	imgstream, error := ioutil.ReadFile("the funny .png")

	//fmt.Fprintf(w, r)
	//fmt.Fprintf(w, w)

	if error != nil {
		fmt.Println(error)
	} else {
		//w.Header().Set("Content-Type", "image.png")
		w.Write(imgstream)
	}

}

//make a httprequest to localhost port 19232 on route /test
func main() {
	http.HandleFunc("/test", ping)
	http.HandleFunc("/cdn/image", imgping)

	http.ListenAndServe(":192", nil)
}
