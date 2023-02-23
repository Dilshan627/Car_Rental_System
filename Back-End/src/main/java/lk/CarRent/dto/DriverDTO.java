package lk.CarRent.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class DriverDTO {
    private long Id;
    private String driverName;
    private String driverAddress;
    private String driverAge;
    private String driverContact;
    private String driverPassword;
    private boolean status;
}
