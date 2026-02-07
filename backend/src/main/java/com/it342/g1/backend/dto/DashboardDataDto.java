package com.it342.g1.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DashboardDataDto {
    private Integer userId;
    private String username;
    private String email;
    private String firstName;
    private String lastName;
    private String phone;
    private String welcomeMessage;
}
