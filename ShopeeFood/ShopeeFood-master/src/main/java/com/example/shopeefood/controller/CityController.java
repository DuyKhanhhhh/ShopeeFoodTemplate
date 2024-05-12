package com.example.shopeefood.controller;

import com.example.shopeefood.model.City;
import com.example.shopeefood.service.city.ICityService;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/city")
public class CityController {
    @Autowired
    private ICityService iCityService;
    @GetMapping
    public ResponseEntity<List<City>> findAll() {
        List<City> listCity = (List<City>) iCityService.findAll();
        if (listCity.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }else {
            return new ResponseEntity<>(listCity, HttpStatus.OK);
        }
    }
}
