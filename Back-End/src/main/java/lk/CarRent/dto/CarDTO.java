package lk.CarRent.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class CarDTO {
    private String registrationNO;
    private String carBrand;
    private String carType;
    private String carColor;
    private String passengers;
    private String transmissionType;
    private String fuelType;
    private int dailyRate;
    private int monthlyRate;
    private int freeKmDay;
    private int freeKmMonth;
    private int extraKM;
    private String damage;
    private String maintain;
    private String status;
    private String carFrontView;
    private String carBackView;
    private String carSideView;
    private String carInteriorView;
}
