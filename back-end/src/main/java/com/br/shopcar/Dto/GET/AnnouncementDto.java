package com.br.shopcar.Dto.GET;

import com.br.shopcar.Dto.GET.Comment.CommentDto;
import com.br.shopcar.Dto.GET.Slim.UserDtoSlim;
import com.br.shopcar.Model.Announcement.Announcement;
import com.br.shopcar.Model.Announcement.Comment;
import com.br.shopcar.Model.ProductModel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class AnnouncementDto {

    private long id;
    @NotBlank
    private UserDtoSlim user;
    @NotBlank
    private Integer amount;
    private LocalDateTime date;
    private List<CommentDto> comments = new ArrayList<>();
    @NotBlank
    private ProductModel product;

    public Announcement convertToModel(){
        Announcement announcement = new Announcement();
        announcement.setId(this.getId());
        announcement.setUser(this.getUser().convertToModel());
        announcement.setAmount(this.getAmount());
        announcement.setDate(this.getDate());
        announcement.setComments(this.getComments().stream()
                .map(CommentDto::convertToModel)
                .collect(Collectors.toList()));
        announcement.setProduct(this.getProduct());
        return announcement;
    }
}
