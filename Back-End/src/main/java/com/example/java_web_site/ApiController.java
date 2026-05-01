package com.example.java_web_site;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

@RestController
public class ApiController {

    @GetMapping("/api/data")
    public Map<String, Object> getData() {
        return Map.of(
                "status", "online",
                "message", "Java бэкенд на Mac работает!",
                "stack", "Spring Boot + Java 25"
        );
    }
}