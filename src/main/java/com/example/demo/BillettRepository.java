package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BillettRepository {

    @Autowired
    private JdbcTemplate db;

    // Store ticket info in the database
    public void lagreBillett(Billett innBillett) {
        String sql = "INSERT INTO Billett (film, antall, fornavn, etternavn, telefonnr, epost) VALUES(?,?,?,?,?,?)";
        db.update(sql, innBillett.getFilm(), innBillett.getAntall(), innBillett.getFornavn(),
                innBillett.getEtternavn(), innBillett.getTelefonnr(), innBillett.getEpost());
    }

    // Retrieve data from the database
    public List<Billett> hentBillett() {
        String sql = "SELECT * FROM Billett ORDER BY etternavn";
        List<Billett> billettListe = db.query(sql, new BeanPropertyRowMapper(Billett.class));
        return billettListe;
    }

    // Delete data in the database
    public void slettBillett() {
        String sql = "DELETE FROM Billett";
        db.update(sql);
    }

}



