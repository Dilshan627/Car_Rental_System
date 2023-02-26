package lk.CarRent.service;

import lk.CarRent.dto.ReserveDTO;

import java.util.List;

public interface ReserveService {
    void saveReserve(ReserveDTO reserve);

    void updateReserve(ReserveDTO reserve);

    ReserveDTO searchReserve(String id);

    List<ReserveDTO> getAllReserves();

    void approvalReserve(String id);
    List<ReserveDTO>getAppruvalReserve();
    ReserveDTO findByDriverName(String name);
}
