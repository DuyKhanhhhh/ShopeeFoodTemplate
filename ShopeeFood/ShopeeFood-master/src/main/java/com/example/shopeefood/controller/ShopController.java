package com.example.shopeefood.controller;

import com.example.shopeefood.model.*;

import com.example.shopeefood.service.category.ICategoryService;
import com.example.shopeefood.service.city.ICityService;
import com.example.shopeefood.service.shop.IShopService;
import com.example.shopeefood.service.user.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/shops")
@CrossOrigin
public class ShopController {
    @Autowired
    private IShopService iShopService;
    @Autowired
    private IUserService iUserService;
    @Autowired
    private ICityService iCityService;
    @Autowired
    private ICategoryService iCategoryService;
    @Value("${folder_upload}")
    public  String fileUpload ;

    @ExceptionHandler({Exception.class})
    public ResponseEntity<String> handleException(Exception e){
        return new ResponseEntity<>("Error", HttpStatus.INTERNAL_SERVER_ERROR);
    }
    @GetMapping()
    public ResponseEntity<Iterable<Shop>> showAllShop(){
        return new ResponseEntity<>(iShopService.findAll(), HttpStatus.OK);
    }
    @PostMapping(consumes = {MediaType.MULTIPART_FORM_DATA_VALUE}, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Shop> createShop(@ModelAttribute ShopFile shopFile) throws IOException {
        MultipartFile multipartFile = shopFile.getImage();
        String nameFile = multipartFile.getOriginalFilename();
        FileCopyUtils.copy(shopFile.getImage().getBytes(),new File(fileUpload+nameFile));
        Optional<City> city = iCityService.findById(shopFile.getIdCity());
        Optional<Category> category = iCategoryService.findById(shopFile.getIdCategory());
        Optional<User> user = iUserService.findById(shopFile.getIdUser());
        Shop shop = new Shop(shopFile.getName(), shopFile.getPhoneNumber(),shopFile.getEmail(),nameFile,shopFile.getTimeStart(),shopFile.getTimeEnd(),city.get(),category.get(),user.get());
        return new ResponseEntity<>(iShopService.save(shop), HttpStatus.CREATED);
    }


}
