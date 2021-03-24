import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTopicInput } from './dto/create-topic.input';
import { UpdateTopicInput } from './dto/update-topic.input';
import { Topic } from './entities/topic.entity';

@Injectable()
export class TopicsService {
  constructor(
    @InjectRepository(Topic) private topicRepository: Repository<Topic>,
  ) {}
  create(createTopicInput: CreateTopicInput) {
    const newTopic = this.topicRepository.create(createTopicInput);
    return this.topicRepository.save(newTopic);
  }

  findAll(): Promise<Topic[]> {
    return this.topicRepository.find();
  }

  findOne(id: number): Promise<Topic> {
    return this.topicRepository.findOneOrFail(id);
  }

  async parseTopics(ids: Array<number>): Promise<Topic[]> {
    let topics: Topic[] = [];
    for (const id of ids) {
      let topic: Topic = await this.findOne(id);
      topics.push(topic);
    }
    return topics;
  }

  async update(
    updateTopicInput: UpdateTopicInput,
  ): Promise<UpdateTopicInput & Topic> {
    return await this.topicRepository.save(updateTopicInput);
  }

  async remove(id: number): Promise<Topic> {
    const topic = await this.findOne(id);
    await this.topicRepository.delete(id);
    return topic;
  }
}
