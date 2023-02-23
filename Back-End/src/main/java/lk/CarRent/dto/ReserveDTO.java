package lk.CarRent.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class ReserveDTO {
    private String bookingId;
    private String customerName;
    private String customerContact;
    private String customerNic;
    private String carNumber;
    private String piUpDate;
    private String piUpTime;
    private String returnDate;
    private String returnTime;
    private String driverName;
    private String driverContact;
    private boolean status;
}
