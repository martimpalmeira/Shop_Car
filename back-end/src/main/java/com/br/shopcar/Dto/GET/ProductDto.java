package com.br.shopcar.Dto.GET;

import com.br.shopcar.Model.ProductModel;
import com.br.shopcar.enums.Automaker;
import lombok.Data;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@Data
public class ProductDto {
    private long id;
    private String name;
    private String description;
    private double price;
    private Integer year;
    @Enumerated(EnumType.STRING)
    private Automaker automaker;
    private String model;
    private String category;

    public <T extends ProductModel> T convertToModel(T productModel){

        productModel.setId(this.getId());
        productModel.setNome(this.getName());
        productModel.setDescricao(this.getDescription());
        productModel.setPreco(this.getPrice());
        productModel.setYear(this.getYear());
        productModel.setAutomaker(this.getAutomaker());
        productModel.setModelo(getModel());
        productModel.setCategory(this.getCategory());

        return productModel;
    }
}
