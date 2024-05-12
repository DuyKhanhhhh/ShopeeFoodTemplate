package com.example.shopeefood.controller;

import com.example.shopeefood.model.Category;
import com.example.shopeefood.service.category.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/category")
public class CategoryController {
    @Autowired
    private ICategoryService icCategoryService;
    @GetMapping
    public ResponseEntity<List<Category>> findAll() {
        List<Category> categoryList = (List<Category>) icCategoryService.findAll();
        if (categoryList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }else {
            return new ResponseEntity<>(categoryList, HttpStatus.OK);
        }
    }
}
