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
        return new ResponseUtil("200", "Successfully Registered.", null);
    }

    
    @GetMapping("/pending")
    public ResponseUtil pendingReserve() {
        return new ResponseUtil("200", "Ok", reserveService.getAllReserves());
    }

}
