package lk.CarRent.service.impl;

import lk.CarRent.dto.ReserveDTO;
import lk.CarRent.entity.Reserve;
import lk.CarRent.repo.ReserveRepo;
import lk.CarRent.service.ReserveService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
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
        if (reserveRepo.existsById(reserve.getBookingId())) {
            reserveRepo.save(mapper.map(reserve, Reserve.class));
        } else {
            throw new RuntimeException(reserve.getBookingId() + " " + "Already Exists..!");
        }
    }

    @Override
    public ReserveDTO searchReserve(String id) {
        if (reserveRepo.existsById(id)) {
            Reserve reserve = reserveRepo.findById(id).get();
            return mapper.map(reserve, ReserveDTO.class);
        } else {
            throw new RuntimeException(id + " Please Check The Id..!");
        }
    }

    @Override
    public List<ReserveDTO> getAllReserves() {
        List<Reserve> all = reserveRepo.getPendingReserve();
        return mapper.map(all, new TypeToken<List<ReserveDTO>>() {
        }.getType());
    }

    @Override
    public void approvalReserve(String id) {
        System.out.println(id);
        if (!reserveRepo.existsById(id)) {
            reserveRepo.appruvalReserve(id);
        } else {
            throw new RuntimeException("Already Exists..!");
        }
    }

    @Override
    public List<ReserveDTO> getAppruvalReserve() {
        List<Reserve> all = reserveRepo.getAppruvalReserve();
        return mapper.map(all, new TypeToken<List<ReserveDTO>>() {
        }.getType());
    }

    @Override
    public List<ReserveDTO> findByDriverName(String name) {
        List<Reserve> all = reserveRepo.findByDriverName(name);
        return mapper.map(all, new TypeToken<List<ReserveDTO>>() {
        }.getType());
    }

}
