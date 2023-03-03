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
    private String pickupDate;
    private String pickupTime;
    private String returnDate;
    private String returnTime;
    private String driverName;
    private String driverContact;
    private String payment;
    private boolean status;
    private boolean fullPayment;

}
