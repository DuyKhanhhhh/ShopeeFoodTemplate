package com.example.shopeefood.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.web.multipart.MultipartFile;

import java.sql.Time;
import java.time.LocalDateTime;

@Getter
@Setter
public class ShopFile {

    private String name;
    private String phoneNumber;
    private String email;
    private MultipartFile image;
    private String timeStart;
    private String timeEnd;
    private long idCity;
    private long idCategory;
    private long idUser;

    public ShopFile() {
    }

    public ShopFile(String name, String phoneNumber, String email, MultipartFile image, String timeStart, String timeEnd, long idCity, long idCategory, long idUser) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.image = image;
        this.timeStart = timeStart;
        this.timeEnd = timeEnd;
        this.idCity = idCity;
        this.idCategory = idCategory;
        this.idUser = idUser;
    }
}
