package com.example.jquerydemo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class DataController {

    @GetMapping("/data")
    public List<MyData> getData(){
        List<MyData> data = new ArrayList<>();
        data.add(new MyData(1,"John"));
        data.add(new MyData(2,"Karl"));
        return data;
    }
}
