package com.example.instrumentshop.Users.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Authority {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private Long id;

    private String name;

    @JoinColumn(name = "users")
    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    private Users users;

    public void setMember(Users users) {
        this.users = users;
    }
}
