INSERT INTO `user`(`bairro`,`cep`,`complemento`,`ddd`,`localidade`,`logradouro`,`uf`,`birth_date`,`descrimination_column`,`email`,`fone`,`password`,`username`,`nacional_number`,`name`) VALUES ('Centro','40000-000',NULL,'77','Vitoria da Conquista','Rua do Centro','BA','05-03-1999','CPF','mario@gmail.com','77988589023','123456','mariozin','12345678912','Mario Bezerra'), ('Lapa','41000-000','AP 1, BL 1','71','Salvador','Rua da Lapa','BA','22-07-1992','CPF','douglas@gmail.com','71987654321','123456','douglas','98765432198','Douglas Almeida');

INSERT INTO `product_model` (`product_type`,`descricao`,`nome`,`preco`,`modelo`,`quilomatragem`,`automaker`,`category`,`part_condition`) VALUES (1,'Prata, 4 portas, ano 2010','Celta',10000,'2010/2011',200000,NULL,NULL,NULL), (1,'Vermelho, 4 portas, ano 2010, AC','Celta',12000,'2010/2011',150000,NULL,NULL,NULL), (1,'Preto, 4 portas, ano 2008','Uno',8500,'Mile',180000,NULL,NULL,NULL), (2,'c3 2010-2015','Amortecedor',450,NULL,NULL,7,'Comum',0);

INSERT INTO `announcement`(`bairro`,`cep`,`complemento`,`ddd`,`localidade`,`logradouro`,`uf`,`amount`,`date`,`product_id`,`user_id`) VALUES ('Centro','40000-000',NULL,'71','Salvador','Praça Castro Alves','BA',1,'2022-01-01 00:00:00',1,1), ('Lapa','42222-222',NULL,'21','Rio de Janeiro','Copacabana','RJ',1,'2022-05-20 00:00:00',2,1), ('Matriz','41000-000',NULL,'77','Vitoria da Conquista','Praça da Matriz','BA',3,'2022-07-29 00:00:00',4,2);

insert into `orders` (`discount`, `sub_total`, `user_id`) values (10, 450, 2);

insert into `order_to_product` values (1, 4);