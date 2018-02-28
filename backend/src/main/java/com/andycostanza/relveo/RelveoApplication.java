package com.andycostanza.relveo;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;

import java.awt.*;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;

@SpringBootApplication
@Slf4j
public class RelveoApplication {

	public static void main(String[] args) {
		SpringApplication.run(RelveoApplication.class, args);
	}

	@EventListener({ApplicationReadyEvent.class})
	void applicationReadyEvent() {
		log.info("Relveo is started ... launching browser now");
		Browse("http://localhost:8080");
	}

	public static void Browse(String url) {
		if(Desktop.isDesktopSupported()){
			Desktop desktop = Desktop.getDesktop();
			try {
				desktop.browse(new URI(url));
			} catch (IOException | URISyntaxException e) {
				log.error(e.getMessage(),e);
			}
		}else{
			Runtime runtime = Runtime.getRuntime();
			try {
				runtime.exec("rundll32 url.dll,FileProtocolHandler " + url);
			} catch (IOException e) {
                log.error(e.getMessage(),e);
			}
		}
	}
}
