package lk.CarRent.controller;

import lk.CarRent.dto.ReserveDTO;
import lk.CarRent.service.ReserveService;
import lk.CarRent.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("reserve")
@CrossOrigin
public class ReserveController {
    @Autowired
    ReserveService reserveService;


    @PostMapping
    public ResponseUtil saveReserve(@RequestBody ReserveDTO reserve) {
        System.out.println(reserve);
        reserveService.saveReserve(reserve);
        return new ResponseUtil("200", "Successfully Booking.", null);
    }


    @GetMapping("/pending")
    public ResponseUtil pendingReserve() {
        return new ResponseUtil("200", "Ok", reserveService.getAllReserves());
    }

    @GetMapping("/approval")
    public ResponseUtil approvalReserve() {
        return new ResponseUtil("200", "Ok", reserveService.getAppruvalReserve());
    }


    @GetMapping(path = "/{id}")
    public ResponseUtil searchReserve(@PathVariable String id) {
        return new ResponseUtil("200", "Ok.", reserveService.searchReserve(id));
    }

    @PutMapping
    public ResponseUtil updateReserve(@RequestBody ReserveDTO reserve) {
        reserveService.updateReserve(reserve);
        return new ResponseUtil("200", "Successfully.", null);
    }

    @GetMapping("/schedule/{name}")
    public ResponseUtil driverSchedule(@PathVariable String name) {
        return new ResponseUtil("200", "Ok", reserveService.findByDriverName(name));
    }

    @GetMapping("/count")
    public ResponseUtil getReserveCount() {
        return new ResponseUtil("200", "Ok", reserveService.countByReserve());
    }
    @GetMapping("/active")
    public ResponseUtil getActiveCount() {
        return new ResponseUtil("200", "Ok", reserveService.countByActiveBooking());
    }

    @GetMapping("/paymentId")
    public ResponseUtil getPaymentId() {
        return new ResponseUtil("200", "Ok", reserveService.getPaymentId());
    }
}
