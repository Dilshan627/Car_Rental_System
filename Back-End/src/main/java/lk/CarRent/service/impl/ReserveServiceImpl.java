package lk.CarRent.service.impl;

import lk.CarRent.dto.ReserveDTO;
import lk.CarRent.entity.Reserve;
import lk.CarRent.repo.ReserveRepo;
import lk.CarRent.service.ReserveService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class ReserveServiceImpl implements ReserveService {

    @Autowired
    ReserveRepo reserveRepo;
    @Autowired
    ModelMapper mapper;

    @Override
    public void saveReserve(ReserveDTO reserve) {
        if (!reserveRepo.existsById(reserve.getBookingId())) {
            reserveRepo.save(mapper.map(reserve, Reserve.class));
        } else {
            throw new RuntimeException(reserve.getBookingId() + " " + "Already Exists..!");
        }
    }

    @Override
    public void updateReserve(ReserveDTO reserve) {

    }

    @Override
    public ReserveDTO searchReserve(String id) {
        return null;
    }

    @Override
    public List<ReserveDTO> getAllReserves() {
        return null;
    }
}
