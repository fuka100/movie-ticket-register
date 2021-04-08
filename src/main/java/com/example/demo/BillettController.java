package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class BillettController {

    @Autowired
    BillettRepository rep;

    // New ArrayList
    private final ArrayList<Billett> billettListe = new ArrayList<>();

    // Store in the ArrayList
    @PostMapping("/lagre")
    public void lagreBillett(Billett innBillett){
        billettListe.add(innBillett);
    }

    // Return elements stored in the ArrayList
    @GetMapping("/hent")
    public ArrayList<Billett> hentBillett(){
        return billettListe;
    }

    // Empty the ArrayList
    @GetMapping("/slett")
    public void slettBillett(){
        billettListe.clear();
    }
}
