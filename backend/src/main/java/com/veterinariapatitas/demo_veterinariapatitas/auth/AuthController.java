package com.veterinariapatitas.demo_veterinariapatitas.auth;

import com.veterinariapatitas.demo_veterinariapatitas.auth.dto.LoginRequest;
import com.veterinariapatitas.demo_veterinariapatitas.auth.dto.LoginResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest req) {

        boolean ok = "admin".equals(req.getUsername()) && "123".equals(req.getPassword());

        if (!ok) {
            return ResponseEntity.status(401).build();
        }

        String token = "fake-" + UUID.randomUUID();
        return ResponseEntity.ok(new LoginResponse(token));
    }
}
