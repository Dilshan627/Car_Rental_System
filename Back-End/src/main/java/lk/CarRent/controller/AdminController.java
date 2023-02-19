package lk.CarRent.controller;

import lk.CarRent.dto.AdminDTO;
import lk.CarRent.service.AdminService;
import lk.CarRent.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("admin")
@CrossOrigin
public class AdminController {

    @Autowired
    AdminService adminService;


    @PostMapping
    public ResponseUtil saveAdmin(@ModelAttribute AdminDTO adminDTO) {
        System.out.println(adminDTO);
        adminService.saveAdmin(adminDTO);
        return new ResponseUtil("200", "Successfully Registered.", null);
    }

    @GetMapping(path = "/{id}")
    public ResponseUtil searchAdmin(@PathVariable String id) {
        return new ResponseUtil("200", "Ok.", adminService.searchAdmin(id));
    }

    @PutMapping
    public ResponseUtil updateAdmin(@RequestBody AdminDTO adminDto) {
        adminService.updateAdmin(adminDto);
        return new ResponseUtil("200", "Successfully Updated.", null);
    }

    @DeleteMapping(params = {"id"})
    public ResponseUtil deleteAdmin(@RequestParam String id) {
        adminService.deleteAdmin(id);
        return new ResponseUtil("200", "Successfully Deleted.", null);
    }

}
