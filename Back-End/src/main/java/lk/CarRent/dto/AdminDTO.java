package lk.CarRent.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class AdminDTO {
    private long adminId;
    private String adminName;
    private String adminAddress;
    private String adminContact;
    private String adminEmail;
    private String adminPassword;
}
