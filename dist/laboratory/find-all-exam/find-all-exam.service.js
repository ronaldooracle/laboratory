"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const exam_entity_entity_1 = require("../../entitys/exam.entity.entity");
const typeorm_2 = require("@nestjs/typeorm");
const log = new common_1.Logger('FindAllExamService');
let FindAllExamService = class FindAllExamService {
    constructor(ExamRepository) {
        this.ExamRepository = ExamRepository;
    }
    async execute() {
        try {
            const exames = await this.findAll();
            return exames;
        }
        catch (error) {
            log.error('Erro ao buscar exames na base de dados');
            throw new common_1.InternalServerErrorException('Erro ao buscar exames na base de dados');
        }
    }
    async findAll() {
        return await this.ExamRepository
            .createQueryBuilder('exam')
            .getMany();
    }
};
FindAllExamService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(exam_entity_entity_1.Exam)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], FindAllExamService);
exports.FindAllExamService = FindAllExamService;
//# sourceMappingURL=find-all-exam.service.js.map