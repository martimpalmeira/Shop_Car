package com.br.shopcar.Model.Announcement;

import lombok.Data;

import javax.persistence.Embeddable;
@Data
@Embeddable
public class Adress {

    private String cep;
    private String logradouro;
    private String complemento;
    private String bairro;
    private String localidade;
    private String uf;

}
