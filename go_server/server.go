package main

import (
	"encoding/json"
	"fmt"
	"sync"
)

func main() {

	waitGroup := new(sync.WaitGroup)
	waitGroup.Add(1)
	fmt.Println(getTracingLog("127.0.0.1"))
	go initWebsockets()

	for {
		var bytes = readBytesBlocking()
		var data = map[string]interface{}{}
		if err := json.Unmarshal(bytes, &data); err != nil {
			panic(err)
		}
		if data["flag"] == "getlog" {
			var response = map[string]interface{}{}
			response["flag"] = "logdata"

			fmt.Println(data)
			if data["name"] == "tracing" {
				response["success"] = true
				response["text"] = "Connection Established"
				var res, _ = json.Marshal(response)
				fmt.Println(res)
				write(res)
			}
		}
	}
	//waitGroup.Wait()
}
