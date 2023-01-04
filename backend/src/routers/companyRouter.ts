import { Router } from "express";
const router = Router();

import { RegisterNewCompany, 
    GetFourOffersIndex,
    GetTwoRecomendedCompaniesOperationHours,
    GetAllCompaniesWithOperationHours,
    GetOneCompany
} from "../controllers/companyController";

router.post("/api/v1/company/register", RegisterNewCompany);
router.get("/api/v1/companies/index", GetFourOffersIndex)
router.get('/api/v1/recomended', GetTwoRecomendedCompaniesOperationHours)
router.get("/api/v1/shops", GetAllCompaniesWithOperationHours)
router.get("/api/v1/store/:slug", GetOneCompany)

export default router;