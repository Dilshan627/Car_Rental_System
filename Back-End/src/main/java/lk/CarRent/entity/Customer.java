package lk.CarRent.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long Id;
    private String customerUserName;
    private String customerFullName;
    private String customerContact;
    private String customerAddress;
    private String customerEmail;
    private String customerPassword;
    private String customerNicNo;
    private String customerDrivingLicenseNo;
    private String nicImage;
    private String drivingLicenseImage;
}
