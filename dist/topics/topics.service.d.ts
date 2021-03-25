import { Repository } from 'typeorm';
import { CreateTopicInput } from './dto/create-topic.input';
import { UpdateTopicInput } from './dto/update-topic.input';
import { Topic } from './entities/topic.entity';
export declare class TopicsService {
    private topicRepository;
    constructor(topicRepository: Repository<Topic>);
    create(createTopicInput: CreateTopicInput): Promise<Topic>;
    findAll(): Promise<Topic[]>;
    findOne(id: number): Promise<Topic>;
    parseTopics(ids: Array<number>): Promise<Topic[]>;
    update(updateTopicInput: UpdateTopicInput): Promise<UpdateTopicInput & Topic>;
    remove(id: number): Promise<Topic>;
}
