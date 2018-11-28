package handler

import (
	"fmt"
	"net/http"
	"net/url"
	"os/exec"
	"regexp"

	"github.com/go-chi/chi"
	"github.com/go-chi/chi/middleware"
	"github.com/go-chi/render"
)

func DownloadRoute() chi.Router {

	r := chi.NewRouter()

	r.Use(middleware.RequestID)
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)

	r.Get("/", route)
	r.Options("/", route)

	return r
}

func route(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Download YouDeez")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "access-control-allow-origin")
	DeezReg := regexp.MustCompile(`^\d+$`)
	YouReg := regexp.MustCompile(`[\w-]{11}`)
	queryValues := r.URL.Query()
	query := queryValues.Get("q")
	q := url.QueryEscape(query)
	switch {
	case DeezReg.MatchString(q):
		DownloadDeez(w, r)
	case YouReg.MatchString(q):
		DownloadYou(w, r)
	default:
		w.Write([]byte("Unknown ID"))
	}

}

func DownloadYou(w http.ResponseWriter, r *http.Request) {
	fmt.Println("DownLoad You")
	queryValue := r.URL.Query()
	query := queryValue.Get("q")
	q := url.QueryEscape(query)
	cmd := exec.Command("go-youtube-dl.exe", "--audio-only", "https://www.youtube.com/watch?v="+q)
	cmd.Stdout = w // streaming occurs here
	err := cmd.Start()
	if err != nil {
		render.JSON(w, r, ErrDuringStream(err))
	}
	err = cmd.Wait()
	if err != nil {
		render.JSON(w, r, ErrDuringWait(err))
	}
	fmt.Fprintf(w, "Done")

}

func DownloadDeez(w http.ResponseWriter, r *http.Request) {
	fmt.Println("DownLoad Deez")
	queryValues := r.URL.Query()
	query := queryValues.Get("q")
	q := url.QueryEscape(query)
	username := LoadEnv("username")
	password := LoadEnv("password")
	fmt.Println("user pass", username, password)
	cmd := exec.Command(
		"go-decrypt-deezer.exe",
		"--id", q,
		"--username", username,
		"--password", password)
	cmd.Stdout = w
	err := cmd.Start()
	if err != nil {
		render.JSON(w, r, ErrDuringStream(err))
	}
	err = cmd.Wait()
	if err != nil {
		render.JSON(w, r, ErrDuringWait(err))
	}
	fmt.Fprintf(w, "Done")
}