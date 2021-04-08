package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BillettController {

    @Autowired
    BillettRepository rep;

    // Store new ticket info
    @PostMapping("/lagre")
    public void lagreBillett(Billett innBillett) {
        rep.lagreBillett(innBillett);
    }

    // Return stored tickets
    @GetMapping("/hent")
    public List<Billett> hentBillett() {
        return rep.hentBillett();
    }

    // Delete the tickets
    @GetMapping("/slett")
    public void slettBillett() {
        rep.slettBillett();
    }

}
