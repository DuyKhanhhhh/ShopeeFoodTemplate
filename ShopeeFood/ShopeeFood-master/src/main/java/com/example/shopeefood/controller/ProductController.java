package com.example.shopeefood.controller;

import com.example.shopeefood.model.Menu;
import com.example.shopeefood.model.Product;
import com.example.shopeefood.model.ProductFile;
import com.example.shopeefood.service.IMenuService;
import com.example.shopeefood.service.IProductService;
import com.example.shopeefood.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    @Value("${folder_upload}")
    private String fileUpload;
    @Autowired
    private IProductService iProductService;
    @Autowired
    private IMenuService iMenuService;
    @GetMapping
    public ResponseEntity<Page<Product>> getProduct(@PageableDefault(value = 3) Pageable pageable,
                                                    @RequestParam(required = false) String search) {
        Page<Product>list=iProductService.findAllByName(pageable, search);
        return new ResponseEntity<>(list, HttpStatus.OK);
    }
    @PostMapping()
    public ResponseEntity<Product> saveProduct(@ModelAttribute ProductFile productFile) throws IOException {
        MultipartFile multipartFile = productFile.getImage();
        String fileName = multipartFile.getOriginalFilename();
        try {
            FileCopyUtils.copy(productFile.getImage().getBytes(), new File(fileUpload + fileName));
        } catch (IOException ex) {
            ex.printStackTrace();
        }
        Product product = new Product(productFile.getId(), productFile.getName(), productFile.getPrice(), productFile.getQuantity(), "img" + fileName, productFile.getDetail(), productFile.getMenus(), productFile.getCreatedAt(), productFile.getUpdatedAt());
        Optional<Menu> menu = iMenuService.findById(product.getMenus().stream().count());
        if (menu != null) {
            product = iProductService.save(product);
            Set<Menu> menuSet = new HashSet<>();
            menuSet.add(menu.get());
            product.setMenus(menuSet);
            return new ResponseEntity<>(product, HttpStatus.CREATED);
        } else {
            // Xử lý khi không tìm thấy menu
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
